import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 47,
        canvasWidth: 1053,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
