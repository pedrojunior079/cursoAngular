import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-novo-momento',
  templateUrl: './novo-momento.component.html',
  styleUrls: ['./novo-momento.component.css']
})
export class NovoMomentoComponent  implements OnInit{
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment){
    const formData = new FormData();
    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messageService.add("Momento adicionado com sucesso!");

    this.router.navigate(['/']);

  }
}
