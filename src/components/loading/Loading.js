import loadingImg from "../../images/loading.svg"
import classes from "./loading.module.css";

export default function Loading() {
    return (
        <>
            <img src={loadingImg} alt={loadingImg.alt} className={classes.loading} />
        </>
    )
}