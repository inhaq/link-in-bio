
import React from 'react';

const HomePage = ({ links }) => {
    return `Hello World`;
    // links = JSON.parse(links);
    // const userData = links.find((link) => link.userName === 'inzi');
    // console.log(userData);
    // return (
    //     <div>
    //         <h1>Link in Bio</h1>
    //         <div>
    //             <h1>{userData.userName}</h1>
    //             <img src={userData.userImg} alt={userData.userName} />
    //             {userData.socials && (
    //                 <ul>
    //                     {Object.keys(userData.socials).map((key) => (
    //                         <li key={key}>
    //                             <a href={userData.socials[key]}>{key}</a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             )}
    //             {userData.leaf && (
    //                 <ul>
    //                     {userData.leaf.map((leafItem, leafIndex) => (
    //                         <li key={leafIndex}>
    //                             <a href={leafItem.url}>
    //                                 {leafItem.title}
    //                                 {leafItem.img && <img src={leafItem.img} alt={leafItem.title} />}
    //                             </a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             )}
    //         </div>
    //     </div>
    // );
};

// export async function getStaticProps() {
//     const response = await fetch('http://localhost:3000/api/data');
//     const links = await response.json();
//
//     return {
//         props: {
//             links,
//         },
//     };
// }

export default HomePage;