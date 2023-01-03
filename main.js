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
    name: 'El Sayed M. El Alfy', Qualification: 'Professor at King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia.', info: 'After a two-year postdoc, also at MIT.', image: 'image/speaker-1.png',
  },
  {
    name: 'Atul Gawande', Qualification: 'Writer, Public health researcher', info: "He directed one of the three committees of the Clinton administration's Task Force on National Health Care Reform", image: 'image/speaker-2.png',
  },
  {
    name: 'El Sayed M. El Alfy', Qualification: 'Professor at King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia.', info: 'After a two-year postdoc, also at MIT.', image: 'image/speaker-1.png',
  },
  {
    name: 'Atul Gawande', Qualification: 'Writer, Public health researcher', info: "He directed one of the three committees of the Clinton administration's Task Force on National Health Care Reform", image: 'image/speaker-2.png',
  },
];

loadSpeakers(listSpeaker);