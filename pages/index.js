import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container} style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDdxYzdoczN2ZjNzd3R3amM5MGozcTdkYnFoMGkwMW96OGEzbmNnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gVsmn4qdyBn1Bra2tN/giphy.gif"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
        <img src="https://media0.giphy.com/media/GwbVjTKRkFgqs/giphy.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=giphy.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
        <img src="https://media1.giphy.com/media/yG69gK8LN0Bm5YLcrC/giphy.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=giphy.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
        <img src="https://media3.giphy.com/media/DA8op0omzFuwe14iyj/giphy.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=giphy.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
      </div>

      <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <h1>Sáp</h1>
          <img src="https://media1.giphy.com/media/KIbxcYxk0KMGXkc10O/giphy.webp?cid=ecf05e47rbo9rx4tbdnjaguhfmr0enceqn9dgzrpqz72rwv7&ep=v1_gifs_search&rid=giphy.webp&ct=g" style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
          <h1>cố</h1>
        </div>
        <img src="Remove-bg.ai_1715269161939.png" style={{width: '16rem', height: '20rem' }}/>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <h1>ơi</h1>
          <img src="https://media3.giphy.com/media/PPgZCwZPKrLcw75EG1/200.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=200.webp&ct=g" style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
          <h1>lên</h1>
        </div>
      </div>

      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <img src="https://media1.giphy.com/media/CnVSvvHyslUkM/200w.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=200w.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
        <img src="https://media2.giphy.com/media/l2QDTsTL2NhwOEAV2/giphy.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=giphy.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
        <img src="https://media1.giphy.com/media/hT9psZ0PCtmYvFAxnc/giphy.webp?cid=790b7611xg3h0rv1ensw8rul45hoh650anpq4wy9nmt53c2l&ep=v1_gifs_search&rid=giphy.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
        <img src="https://media0.giphy.com/media/3o752eDHQgwl8zS3Oo/200.webp?cid=ecf05e47rbo9rx4tbdnjaguhfmr0enceqn9dgzrpqz72rwv7&ep=v1_gifs_search&rid=200.webp&ct=g"  style={{marginRight: '2rem', width: '6rem', height: '6rem'}}/>
      </div>
      <style jsx>{`
        h1 {
          font-family: monospace;
          font-size: 3em;
          animation: color-change 3s infinite;
        }
        
        @keyframes color-change {
          0% { color: red; }
          20% { color: blue; }
          40% { color: green; }
          60% { color: yellow; }
          80% { color: black; }
          100% { color: red; }
        }
      `}</style>
    </div>
  );
}


