import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-entreprise',
  templateUrl: './profile-entreprise.component.html',
  styleUrls: ['./profile-entreprise.component.scss']
})
export class ProfileEntrepriseComponent {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  changePassword: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';
  email: any;
  user!: User ;
  nom: any;
  competences:any=[];

  constructor(private userService:AuthService,private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.email=user.email;
      this.nom=user.nom;
      
       
       
      // Do something with the id_user value
      
    }
    this.getUser();
    
  }

  getUser() {
    // Call your service method to fetch the existing collaborateur data
    this.userService.getUserByEmail(this.email)
      .subscribe(
        existingUser => {
          // Populate the collaborateur object with the existing values
          this.user = existingUser;
          console.log(this.user);
        },
        error => {
          console.error('Error fetching user:', error);
          // Handle error appropriately
        }
      );
  }




  
}
