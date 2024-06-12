import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles=[
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Saulos Chilima: Malawi VP's plane may have crashed in forest, army says",
      "description": "Soldiers are combing Chikangawa Forest in an effort to find Saulos Chilima and nine others.",
      "url": "https://www.bbc.co.uk/news/articles/c722vpp1ndro",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cb16/live/bc1c8e00-27d5-11ef-a74e-9d61efed4dbb.jpg",
      "publishedAt": "2024-06-11T10:37:14.2461971Z",
      "content": "In press briefing on Tuesday, Malawi Defence Force commander Paul Valentino Phiri said fog has reduced visibility in the forest, thus complicating search efforts.\r\nPresident Lazarus Chakwera has said… [+1699 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Gary Glitter told to pay victim £508,000 damages",
      "description": "Gary Glitter told to pay victim £508,000 damages",
      "url": "https://www.bbc.co.uk/news/articles/cyjjg4ljmkgo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png",
      "publishedAt": "2024-06-11T09:52:14.6859944Z",
      "content": "This breaking news story is being updated and more details will be published shortly. Please refresh the page for the fullest version.\r\nYou can receive Breaking News on a smartphone or tablet via the… [+93 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hong Kong: Three foreign judges resign from top court",
      "description": "The departing top court judge says the city's rule of law has been \"profoundly compromised\".",
      "url": "https://www.bbc.co.uk/news/articles/c722094n135o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5dca/live/81daa5e0-24b7-11ef-8371-2578a4adb4a9.png",
      "publishedAt": "2024-06-11T09:37:13.6846655Z",
      "content": "Since Hong Kongs security laws kicked in, rights groups, critics and even the UK government had questioned the foreign judges continued presence on the court.\r\nIn 2020, a senior Australian judge was … [+2190 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Michael Mosley's top simple health tips",
      "description": "Michael Mosley’s simple and accessible health hacks made him a household name.  Remember these?",
      "url": "https://www.bbc.co.uk/news/articles/c1wwv0405wyo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f9bd/live/fbe58540-27bd-11ef-90d9-571fe76c07f2.jpg",
      "publishedAt": "2024-06-11T08:37:21.2626933Z",
      "content": "Most of us know what we should be doing to eat healthily - eating plenty of fruit and vegetables and cutting back on fatty and sugar-laden foods being the primary objectives.\r\nBut are there hidden he… [+1131 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Thailand: Chatuchak market fire kills 1,000 animals",
      "description": "The blaze at Thailand's famous Chatuchak market kills dogs, birds, snakes and cats.",
      "url": "https://www.bbc.co.uk/news/articles/cw44gm303wro",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/32ff/live/298d0d30-27ad-11ef-903e-4d27c20cf328.jpg",
      "publishedAt": "2024-06-11T06:37:18.2460683Z",
      "content": "Around 1,000 animals were killed in a fire in Bangkok's famous open-air Chatuchak market early Tuesday, gutting nearly 100 shops. \r\nBirds, dogs, cats and snakes were burnt to death in their cages in … [+1753 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Warning shots from South as NK soldiers cross border",
      "description": "The incident at the DMZ comes at a time of heightened tensions between the two Koreas.",
      "url": "https://www.bbc.co.uk/news/articles/c511ve3051po",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d047/live/b572a340-27a9-11ef-a8bc-85144f831b8c.jpg",
      "publishedAt": "2024-06-11T06:37:17.3869091Z",
      "content": "South Korean soldiers fired warning shots after North Korean troops crossed the border by mistake, Seoul's military said on Tuesday.\r\nThe incident at the Demilitarised Zone (DMZ) on Sunday comes as t… [+1872 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Singapore Airlines offers turbulence victims compensation",
      "description": "The airline said it was offering to pay $10,000 to those who sustained minor injuries.",
      "url": "https://www.bbc.co.uk/news/articles/cpwwy3wq5p6o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0475/live/08503080-2798-11ef-b4d4-110a66fef6b0.jpg",
      "publishedAt": "2024-06-11T03:07:12.1219935Z",
      "content": "Singapore Airlines has offered to pay compensation to those who were injured on a London to Singapore flight that encountered severe turbulence.\r\nIn a social media post, the airline said it was offer… [+686 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "US Cornell College instructors injured in assault in China, school says",
      "description": "The instructors were on a daytime visit to a public park when they were attacked, Cornell College says.",
      "url": "https://www.bbc.co.uk/news/articles/c844q27v732o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c231/live/da2fea60-278d-11ef-b96a-d1d425ff320f.png",
      "publishedAt": "2024-06-11T01:52:15.9973482Z",
      "content": "Four US university tutors are recovering in hospital after they were stabbed by a random assailant at a public park in China.\r\nThe Iowa Cornell College instructors were injured in a \"serious incident… [+1111 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Apple boosts Siri with ChatGPT in AI overhaul",
      "description": "The company has been slower to roll out generative AI features than rivals including Google and Microsoft.",
      "url": "https://www.bbc.co.uk/news/articles/c4nn5mejl89o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1b13/live/1589a5d0-2764-11ef-9d0a-ef8fa1b61375.jpg",
      "publishedAt": "2024-06-10T21:22:12.9189837Z",
      "content": "Apple is to boost its Siri voice assistant and operating systems with ChatGPT as it seeks to catch up in the AI race.\r\nThe iPhone maker announced the Siri makeover along with a number of other new fe… [+1334 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "UN Security Council backs US Israel-Gaza ceasefire plan",
      "description": "UN Security Council backs US Israel-Gaza ceasefire plan",
      "url": "https://www.bbc.co.uk/news/articles/cw448x7lxggo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6c8e/live/987c4020-2763-11ef-9d0a-ef8fa1b61375.jpg",
      "publishedAt": "2024-06-10T20:07:18.7631821Z",
      "content": "The first phase of the plan concerns a hostage-prisoner swap as well as short-term ceasefire.\r\nThe second phase includes a \"permanent end to hostilities\", as well as a full withdrawal of Israeli forc… [+699 chars]"
    }
  ]

  constructor(){
    super();
    console.log("Hello i am constructor from news components ");
    this.state={
      articles : this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
          <div className="col-md-3">
             <NewsItem title="myTitle_1" description="myDscr_1"/>
          </div>
        </div>

      </div>
    )
  }
}

export default News
