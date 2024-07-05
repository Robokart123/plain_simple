import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1281,
        canvasHeight: 98,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
