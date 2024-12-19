import Pdf from "./SAMiATOUi-RESUME.pdf";

export default function Menuitems() {

    const onResumeClick = () =>{
        window.open(Pdf);
    }

    return (
        <a onClick={onResumeClick}>
            <button>MY RESUME</button>
        </a>
    )

}