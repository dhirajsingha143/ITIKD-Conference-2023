// Mobile-menu
const menu = document.querySelector('.nav-link-container');
const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-x');
const link = document.querySelector('.nav-link');
function Menu() {
  menu.classList.toggle('on-of');
  menuBtn.classList.toggle('on-of');
  closeBtn.classList.toggle('on-of');
}
menuBtn.addEventListener('click', Menu);
closeBtn.addEventListener('click', Menu);
link.addEventListener('click', Menu);

// Load Featured Speakers dynamically

function loadSpeakers(listSpeaker) {
  const sectionSpeaker = document.getElementById('speaker');
  const containerForSpeaker = document.createElement('ul');
  containerForSpeaker.classList.add('speaker-ul-container');
  sectionSpeaker.append(containerForSpeaker);
  //  Created a div.speaker-ul-container inside section#speaker

  //  Using JS arry forEach looping through the array
  listSpeaker.forEach((speaker) => {
    const speakerList = document.createElement('li');
    speakerList.classList.add('speaker-list');
    //  li.speaker-list
    const speakerbgImg = document.createElement('img');
    speakerbgImg.classList.add('speaker-bg-img');
    speakerbgImg.src = 'image/speaker-background.png';
    speakerList.append(speakerbgImg);
    //  img.speaker-bg-img

    const speakerImg = document.createElement('img');
    speakerImg.classList.add('speakerImg');
    speakerImg.src = speaker.image;
    speakerList.append(speakerImg);
    //  img.speaker-img

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('speaker-info-container');
    speakerList.append(infoContainer);
    //  info-container

    const speakerName = document.createElement('h3');
    speakerName.classList.add('speaker-name');
    speakerName.textContent = speaker.name;
    infoContainer.append(speakerName);
    //  h3.speaker-name

    const speakerQualification = document.createElement('p');
    speakerQualification.classList.add('speaker-qualification');
    speakerQualification.textContent = speaker.Qualification;
    infoContainer.append(speakerQualification);
    //  p.speaker-qualification

    const line = document.createElement('hr');
    line.classList.add('speaker-underline');
    infoContainer.append(line);

    const speakerInfo = document.createElement('p');
    speakerInfo.classList.add('speaker-info');
    speakerInfo.textContent = speaker.info;
    infoContainer.append(speakerInfo);
    //  p.speaker-info

    containerForSpeaker.append(speakerList);
  });
}

const listSpeaker = [
  {
    name: 'El Sayed M. El Alfy', Qualification: 'Professor at King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia.', info: 'He has accumulated over 25 years of academic and industrial experience. His research interests include Intelligent Systems and Computational Intelligence.', image: 'image/speaker-1.png',
  },
  {
    name: 'Tatiana Kalganova', Qualification: 'BSc (Hons), PhD, is a Professor of Intelligent Systems at Brunel.', info: "She has over 25 years of experience in design and implementation of applied Intelligent Systems.", image: 'image/speaker-2.png',
  },
  {
    name: 'Helen D. Karatza', Qualification: 'Senior member of IEEE, ACM, SCS, is a Professor of Informatics at the Aristotle University, Greece.', info: 'Her research interests include cloud, fog and mist computing, energy efficiency, fault tolerance, scheduling algorithms and real-time distributed systems.', image: 'image/speaker-3.png',
  },
  {
    name: 'Aisha Al Haram', Qualification: 'Work at National Space Science Agency', info: "A Bahraini scientist working at the NSSA, who has achieved a lot and published many articles in space sciences.", image: 'image/speaker-4.png',
  },
  {
    name: 'Mohamed Buallay', Qualification: 'Data Scientist and Google Developer Expert', info: "He's one of the best young speakers in the region in the following areas: Artificial Intelligence, Data Science, Machine Learning, and Deep learning.", image: 'image/speaker-5.png',
  },
  {
    name: 'Ishika Neogi', Qualification: 'PhD, She is a Professor of Biomedical Science at Queen Mary University of London', info: "Youngest international speaker in the field of cancer translation. Current research projects focus on integration with clinical data, research, particularly for breast cancer.", image: 'image/speaker-6.png',
  },
];

loadSpeakers(listSpeaker);