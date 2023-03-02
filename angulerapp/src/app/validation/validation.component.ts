import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  userForm: FormGroup;
  users: { name: string, email: string }[] = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Bob', email: 'bob@example.com' }
  ];

  alreadyAddedUsers: { name: string, email: string, newlyAdded: boolean }[] = [];
  newlyAddedUsers: { name: string, email: string, newlyAdded: boolean }[] = [];
  nameAlreadyTaken = false;
  emailAlreadyTaken = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    const name = this.userForm.value.name;
    const email = this.userForm.value.email;

    // Check if name or email is already taken
    this.nameAlreadyTaken = this.users.some(user => user.name === name);
    this.emailAlreadyTaken = this.users.some(user => user.email === email);

    if (!this.nameAlreadyTaken && !this.emailAlreadyTaken) {
      // Add new user to users array
      this.users.push({ name, email });

      // Add new user to newlyAddedUsers array
      this.newlyAddedUsers.push({ name, email, newlyAdded: true });

      // Reset form and validation
      this.userForm.reset();
      this.nameAlreadyTaken = false;
      this.emailAlreadyTaken = false;

      // Update alreadyAddedUsers array
      this.updateAlreadyAddedUsers();
    }
  }

  private updateAlreadyAddedUsers() {
    // Clear alreadyAddedUsers array
    this.alreadyAddedUsers = [];

    // Iterate over users array and add already added users to alreadyAddedUsers array
    this.users.forEach(user => {
      const newlyAdded = this.newlyAddedUsers.some(newUser => newUser.name === user.name && newUser.email === user.email);
      if (!newlyAdded) {
        this.alreadyAddedUsers.push({ name: user.name, email: user.email, newlyAdded: false });
      }
    });
  }
}