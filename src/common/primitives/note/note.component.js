import React from 'react';
import styles from './note.module.scss';
import classNames from 'classnames';
import { UserInline } from '../';

const NoteComponent = (props) => {
  return (
    <div className={styles.noteWrp}>
      <div className={styles.noteinfoWrp}>
        <UserInline
          user={{
            name: 'Mary Smith',
            img:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-b-ygbKGYUM9v7hU2ONHAOM9qGlLawSkqovSn1R3MNLNPwM&s',
          }}
        />
        <div className={styles.rightCon}>
          <div className={classNames('caption', styles.date)}>Apr 14</div>
        </div>
      </div>
      <div className={styles.message}>
        That's great news. Let's follow up with Steve Smith. He's running R&Dat
        the new shop. Word on the stree is that they’ll launch Q3. After that
        we’ll see.
      </div>
    </div>
  );
};

export default React.memo(NoteComponent);
