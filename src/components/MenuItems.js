import Pdf from "./SAMIATOUi-RESUME.pdf";

export default function Menuitems() {

    const onResumeClick = () =>{
        window.open(Pdf);
    }

    return (
        <a onClick={onResumeClick}>
            MY RESUME
        </a>
    )

}