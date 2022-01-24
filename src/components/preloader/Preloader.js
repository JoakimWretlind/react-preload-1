import ReactAnime from 'react-animejs'
import { PreloaderPage, Square, Wrapper, CountDown, Input } from './preloader.style';

const Preloader = () => {
    const { Anime, stagger } = ReactAnime

    return (
        <>
            <Anime
                initial={[
                    {
                        targets: ".squareThree",
                        translateX: stagger(150, { grid: [12, 5], from: "center", axis: "x" }),
                        translateY: stagger(150, { grid: [12, 5], from: "center", axis: "y" }),
                        rotateZ: stagger([0, 90], { grid: [12, 5], from: "center", axis: "x" }),
                        delay: stagger(200, { grid: [12, 5], from: 'center' }),
                        delay: 4800,
                        scale: 0,
                        borderRadius: ['0%', '100%'],
                        backgroundColor: '#555',
                        duration: 3000,
                        easing: 'easeOutQuad'
                    }
                ]}
            >
                <PreloaderPage id="grid">
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                    <Square className='squareThree'></Square>
                </PreloaderPage>
            </Anime>

            <Anime
                initial={[
                    {
                        targets: '#input',
                        value: [10, 0],
                        duration: 3500,
                        round: 1,
                        easing: 'linear'
                    }
                ]}
            >
                <Wrapper>
                    <CountDown>T minus</CountDown>
                    <Input id="input" />
                </Wrapper>
            </Anime>
        </>
    )
};

export default Preloader;
