import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
 const { level } = useContext(ChallengesContext);
 
  return (
   <div className={styles.profileContainer}>
    <img src="http://github.com/kallamy.png" alt="Kallamy"/>
    <div>
     <strong>João Ninguem</strong>
     <p>
      <img src="icons/level.svg" alt="Level"/>
      {level}
     </p>
    </div>
   </div>
  );
}