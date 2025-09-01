import React from 'react';
import Random from './Random';
function Achievements({onStackComplete}) {
  const achievements = [
    {
      title: 'Runners Ups in Hack For Imapact',
      detail: 'My team won 2nd prize in the hackathon organized by IIIT Delhi for Developing real life solution in Medical Industry',
      tag: "Achievement"
    },
    {
      title: 'Top 6 Finalist in Build Wars Hackathon',
      detail: 'My Team was in Top 6 teams in the Hakathon Organized by MindFlare, MAIT',
      tag: "Achievement"
    },
    {
      title: '8.0+ CGPA in College',
      detail: 'my current cgpa is more than 8 which shows my dedication and hard work towards my studies.',
      tag: "Achievement"
    },
    {
      title: 'Advance Mern Stack Development',
      detail: 'I Had completed a mern stack course by PW skills which covered all the advanced concepts',
      tag: 'Certification',
    },
    {
      title: 'Dsa In Java',
      detail: 'Completed a certification course on Data Structures and Algorithms in Java.',
      tag: 'Certification',
    },
  ];

  return (
    <Random />
  );
}

export default Achievements;