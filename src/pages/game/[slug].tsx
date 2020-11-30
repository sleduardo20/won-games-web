import { GetStaticPaths, GetStaticProps } from 'next';
import mockGallery from 'components/Gallery/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';
import Game, { GameTemplateProps } from '../../templates/Game';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

// gerar as rotas em tempo de build
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'batman' } }],
    fallback: false,
  };
};

// gerar os dados de forma estática
export const getStaticProps: GetStaticProps<GameTemplateProps> = async () => {
  const descriptionHTML = `<div class="description">
    
    
    
  Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.
<h4>Product Features:</h4><ul><li>“Be The Batman” – Live the complete Batman experience as the Dark Knight enters the concluding chapter of Rocksteady’s Arkham trilogy. Players will become The World’s Greatest Detective like never before with the introduction of the Batmobile and enhancements to signature features such as FreeFlow Combat, stealth, forensics and navigation.<br></li><li>Introducing the Batmobile – The Batmobile is brought to life with a completely new and original design featuring a distinct visual appearance and a full range of on-board high-tech gadgetry. Designed to be fully drivable throughout the game world and capable of transformation from high speed pursuit mode to military grade battle mode, this legendary vehicle sits at the heart of the game’s design and allows players to tear through the streets at incredible speeds in pursuit of Gotham City’s most dangerous villains. This iconic vehicle also augments Batman’s abilities in every respect, from navigation and forensics to combat and puzzle solving creating a genuine and seamless sense of the union of man and machine.<br></li><li>The Epic Conclusion to Rocksteady’s Arkham Trilogy – Batman: Arkham Knight brings all-out war to Gotham City. The hit-and-run skirmishes of Batman: Arkham Asylum, which escalated into the devastating conspiracy against the inmates in Batman: Arkham City, culminates in the ultimate showdown for the future of Gotham. At the mercy of Scarecrow, the fate of the city hangs in the balance as he is joined by the Arkham Knight, a completely new and original character in the Batman universe, as well as a huge roster of other infamous villains including Harley Quinn, The Penguin, Two-Face and the Riddler.<br></li><li>Explore the entirety of Gotham City – For the first time, players have the opportunity to explore all of Gotham City in a completely open and free-roaming game world. More than five times that of Batman: Arkham City, Gotham City has been brought to life with the same level of intimate, hand-crafted attention to detail for which the Arkham games are known.<br></li><li>Most Wanted Side Missions – Players can fully immerse themselves in the chaos that is erupting in the streets of Gotham. Encounters with high-profile criminal masterminds are guaranteed while also offering gamers the opportunity to focus on and takedown individual villains or pursue the core narrative path.<br></li><li>New Combat and Gadget Features – Gamers have at their disposal more combat moves and high-tech gadgetry than ever before. The new ‘gadgets while gliding’ ability allows Batman to deploy gadgets such as batarangs, the grapnel gun or the line launcher mid-glide while Batman’s utility belt is once again upgraded to include all new gadgets that expand his range of forensic investigation, stealth incursion and combat skills.</li></ul><br><hr>
This season pass for Batman: Arkham Knight features new story missions, more supervillains invading Gotham City, new legendary Batmobiles, advanced challenge maps, alternative character skins, and new drivable race tracks.



  
  <p class="description__copyrights">
  BATMAN: ARKHAM KNIGHT software © 2015 Warner Bros. Entertainment Inc. Developed by Rocksteady Studios.
BATMAN and all characters, their distinctive likenesses, and related elements are trademarks of DC Comics © 2015. All Rights Reserved.
WB GAMES LOGO, WB SHIELD: ™ &amp; © Warner Bros. Entertainment Inc.
(s15)
</p></div>
  `;

  return {
    props: {
      cover:
        'https://images.gog-statics.com/e5afc0564e689bc226f9d748df7b0eee7d16af21761654c9d4f5d2da71ebd7fe.jpg',
      gameInfo: {
        title: 'Batman: Arkham Asylum Game of the Year Edition',
        description:
          'Critically acclaimed Batman: Arkham Asylum returns with a remastered Game of the Year Edition, featuring 4 extra Challenge Maps. The additional Challenge Maps are Crime Alley; Scarecrow Nightmare; Totally Insane and Nocturnal Hunter (both from the Insane Night Map Pack).',
        price: '9,29',
      },
      gallery: mockGallery,
      description: descriptionHTML,
      details: {
        developer: 'Different Tales',
        releaseDate: '2020-12-12T23:00:00',
        platforms: ['windows', 'linux', 'mac'],
        publisher: 'Walkabout',
        rating: 'BR18',
        genres: ['Role-playing', 'Action'],
      },
      upcommingGames: mockGames,
      upcommingHighlight: mockHightLight,
      recommendedGames: mockGames,
    },
  };
};
