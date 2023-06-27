import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "China expels Canadian diplomat in worsening bilateral ties - Reuters Canada",
            "description": "China on Tuesday expelled a Canadian diplomat in Shanghai in a tit-for-tat after Ottawa told a Toronto-based Chinese diplomat to leave the country, escalating already tense bilateral relations amid concerns about Chinese influence in Canada.",
            "url": "https://www.reuters.com/world/americas/canada-expels-chinese-diplomat-accused-targeting-lawmaker-2023-05-08/",
            "urlToImage": "https://www.reuters.com/resizer/iam5SQ4rZjRcSwgzjO_LXsz_vfc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N5GOPPFE2FO5TMA7VRWALADVAI.jpg",
            "publishedAt": "2023-05-09T05:28:00Z",
            "content": "OTTAWA, May 8 (Reuters) - China on Tuesday expelled a Canadian diplomat in Shanghai in a tit-for-tat after Ottawa told a Toronto-based Chinese diplomat to leave the country, escalating already tense … [+3314 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Josh Peter",
            "title": "Lonnie Walker IV, LeBron James lead Lakers to 3-1 series lead on Warriors - USA TODAY",
            "description": "LeBron James, Anthony Davis and Lonnie Walker IV helped the Los Angeles Lakers defeat the Golden State Warriors in Game 4 to take a 3-1 series lead.",
            "url": "https://www.usatoday.com/story/sports/nba/2023/05/09/lebron-james-lonnie-walker-iv-lift-lakers-to-game-4-win-vs-warriors/70197855007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/05/09/USAT/4c9f492e-4a86-4d81-a921-6011cd33ba82-AP_Warriors_Lakers_Basketball.jpg?crop=1589,894,x1026,y27&width=1589&height=894&format=pjpg&auto=webp",
            "publishedAt": "2023-05-09T05:00:55Z",
            "content": "LOS ANGELES The Los Angeles Lakers defeated the Golden State Warriors, 104-101, Monday night in Game 4 of the Western Conference semifinals, taking a 3-1 lead in the playoff series.\r\nThe Lakers ralli… [+2180 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sana Noor Haq,Anna Chernova,Vasco Cotovio",
            "title": "Russia scales back annual Victory Day parade as Putin's war in Ukraine comes under mounting pressure - CNN",
            "description": "Thousands of people will line the streets of Moscow's Red Square on Tuesday as part of Russia's annual Victory Day parade, when the Kremlin will display a front of military might and grandeur contrasting with its faltering military campaign on the frontlines …",
            "url": "https://www.cnn.com/2023/05/09/europe/russia-victory-day-parade-moscow-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230508113950-03-rehearsal-moscow-victory-day-050723.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-09T03:56:15Z",
            "content": "Thousands of peoplewill line the streets of Moscows Red Square on Tuesday as part of Russias annual Victory Day parade, when the Kremlin will display a front of military might and grandeur contrastin… [+5162 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Valerie Gonzalez",
            "title": "Driver in deadly Texas crash charged with manslaughter - The Associated Press",
            "description": "BROWNSVILLE, Texas (AP) — An SUV driver who killed eight people when he slammed into a group waiting at a bus stop  in Brownsville, Texas, was charged with manslaughter, police said Monday as investigators tried to determine if the crash was intentional.",
            "url": "https://apnews.com/article/brownsville-texas-crash-driver-bd38bbfeb48809aa82eaadad61e15c2a",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/8c3a5016b41147879ae37f2d1d87d896/3000.webp",
            "publishedAt": "2023-05-09T03:52:17Z",
            "content": "BROWNSVILLE, Texas (AP) An SUV driver who killed eight people when he slammed into a group waiting at a bus stop in Brownsville, Texas, was charged with manslaughter, police said Monday as investigat… [+5831 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "12 reported killed in latest Israeli air attacks on Gaza - Al Jazeera English",
            "description": "The Palestinian Islamic Jihad group said three of its leaders were killed as well as their wives and some children.",
            "url": "https://www.aljazeera.com/news/2023/5/8/israeli-jets-hit-targets-in-gaza",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/05/2023-05-09T001737Z_1193016825_RC2NU0ANL3RE_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA-1683592891.jpg?resize=1920%2C1440",
            "publishedAt": "2023-05-09T03:00:00Z",
            "content": "Twelve people have been killed in Israeli air raids on the Gaza Strip in what Israels military said was the targeting of members of the Palestinian Islamic Jihad movement.\r\nAl Jazeeras Youmna El Saye… [+3081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "iPhone 16 Pro and Pro Max to Feature Larger 6.3-Inch and 6.9-Inch Displays - MacRumors",
            "description": "iPhone 16 Pro and iPhone 16 Pro Max models launching in 2024 will feature around 6.3-inch and 6.9-inch display sizes, respectively, according to...",
            "url": "https://www.macrumors.com/2023/05/08/iphone-16-pro-larger-display-sizes/",
            "urlToImage": "https://images.macrumors.com/t/STnwdfsFMl_HUZHFvOsBSqtQwLE=/2250x/article-new/2023/03/iPhone-16-Mock-Header-1.jpg",
            "publishedAt": "2023-05-09T02:47:28Z",
            "content": "iPhone 16 Pro and iPhone 16 Pro Max models launching in 2024 will feature around 6.3-inch and 6.9-inch display sizes, respectively, according to oft-accurate display industry analyst Ross Young of Di… [+1038 chars]"
        },
       
       
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=7eeb2ae3ef0f49f3a57471b86a7b6ea9";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles})

     }
    render() {
        return (
            <div>
                <h1 className='text-lg font-bold my-2 ' style={{ textAlign: 'center',fontSize:"2rem" }}>The News you wanted</h1>
                <div className='grid grid-cols-3  gap-4 p-4' >
                {this.state.articles.map((elements)=>{
                 
                 return <div classname="min-h-screen flex items-center justify-center" key={elements.url}>
                  
                    
                        <NewsItem title={elements.title} imageUrl={elements.urlToImage} Newsurl={elements.url}/>
                    
                    </div>
                    
                   
                })}
                </div>
                
            </div>
        )
    }
}

export default News
