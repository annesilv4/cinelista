import Style from "./Title.module.css";

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    return (
        <h2 className={Style.title}>{title}</h2>
    )
}

export default Title;