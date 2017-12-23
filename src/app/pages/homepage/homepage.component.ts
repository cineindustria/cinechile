import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <main role="main" class="container">
      <div class="row">
        <div class="col-md-5">
          col1
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas recusandae quo fugiat suscipit animi quis, minus quia consectetur vero! Maxime quia quibusdam cum provident eaque fugit, sequi nam aspernatur eligendi?
        </div>
        <div class="col-md-3 container__info_column">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita enim vel eos, dolores, ipsam numquam impedit vitae id harum cum dolorem. Tenetur tempora aut quo deleniti impedit quisquam voluptatum ab.</div>
          <div>Nemo dolores consectetur sint ad est, mollitia debitis? Amet alias doloribus asperiores adipisci, perferendis maxime officiis nobis quia aliquid dicta. Suscipit, quaerat veniam voluptatem soluta amet magni quas aliquam hic.</div>
          col2
        </div>
        <div class="col-md-4">
          col3
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus dolor iste debitis, ut vel ab, odit quam, nostrum eveniet repellat. Facilis incidunt modi earum explicabo obcaecati expedita fugit, labore.</div>
          <div>Fugiat harum dolores aut commodi cumque eius molestias, hic. Alias, et molestias voluptatibus suscipit similique obcaecati reiciendis saepe facilis quaerat corporis, ut porro consequatur ad aliquid mollitia voluptates non asperiores.</div>
          <div>Rerum asperiores possimus minima. Labore eaque molestias blanditiis sit fugit, beatae dolor quas cum sapiente possimus vitae magnam iure dignissimos vel ullam at consequatur repellendus veritatis natus dicta odit provident.</div>
        </div>
      </div>
    </main>
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
