import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {

  chessGameArray: IContent[];

  constructor() {
    this.chessGameArray = [{

       id: 0,
       title: "toytheater",
       description: "Offers educational math, literacy, and art activities and games",
       author: "Ben KG",
       imgSrc: "https://toytheater.com/wp-content/uploads/chess.jpg",
       type: "Online chess game",
       tags: ["Person VS Person"]
       },
       {
       id: 1,
       title: "chesskid",
       description: "Is to make chess fun, safe and accessible",
       author: "FunMasterMike",
       imgSrc: "https://www.chesskid.com/images/socialmedia/welcome_to_chesskid.png",
       type: "Online chess game",
       tags: ["Learn"]
       },
       {
        id: 2,
        title: "chessmatec",
        description: "The ChessMatec App is an interactive educational game, the most advanced one for learning and practicing the game of chess in a fun and exciting way",
        author: "Dana Lazarof",
        imgSrc: "https://play-lh.googleusercontent.com/SX2NTZLFLUXSIK36dN19uzmqZCMoqUPx4l74D-nxAK71o4YXL8JabA_xjgu8-dH7Jw=w526-h296-rw",
        type: "Chess app",
        tags: ["Learn"]
       },
       {
        id: 3,
        title: "lichess",
        description: " Play chess in a clean interface. No registration, no ads, no plugin required.",
        author: "Thibault Duplessis",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lichess_Logo_2019.svg/1200px-Lichess_Logo_2019.svg.png",
        type: "Online chess",
        tags: ["Rapid"]
    }]
  }

}
