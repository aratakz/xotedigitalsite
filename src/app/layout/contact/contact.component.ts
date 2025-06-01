import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2'
import { SMTPClient } from 'emailjs';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  email: string = "";
  subject: string = "";

  async ngOnInit() {}
   async sendEmail() {
    if (this.email && this.subject) {
      await Swal.fire({
        title: 'E-mail enviado com sucesso!!',
        position: "top-end",
        toast: true,
        text: 'Agradece o contato.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
      });
    }
   }
}
