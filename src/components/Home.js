import React from 'react';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '1rem',
        height: '80vh',
        lineHeight: '1.3rem',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '1.3rem',
        fontFamily: 'sans-serif',
        fontWeight: '300',
        width: '90%',
        margin: '0 auto',
      }}
    >
      <h2 style={{ fontWeight: '700', padding: '2rem 0' }}>
        Welcome to our page
      </h2>
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ab ea
        molestiae natus aspernatur quam cupiditate repudiandae recusandae nulla,
        vel consectetur maxime odio voluptate laborum facilis mollitia placeat
        necessitatibus blanditiis eos exercitationem amet. Quo adipisci
        repellendus dolorem debitis neque ipsam enim voluptatibus sequi possimus
        facilis, similique numquam expedita quos magni. Lorem ipsum dolor sit
        amet.
        <br />
        Maiores, ab ea molestiae natus aspernatur quam cupiditate repudiandae
        recusandae nulla, vel consectetur maxime odio voluptate laborum facilis
        mollitia placeat necessitatibus blanditiis eos exercitationem amet. Quo
        adipisci repellendus dolorem debitis neque ipsam enim voluptatibus sequi
        possimus facilis, similique numquam expedita quos magni.
      </p>
    </div>
  );
}

export default Home;
