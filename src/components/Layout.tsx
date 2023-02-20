import { useState } from "react";
import styles from "./Layout.module.css"

export function Layout() {
    const [selectRating, setSelectRating] = useState<number>();
    function ratingClicked(n: number) 
    {
        setSelectRating(n)
    }

    const [isSubmit, setIsSubmit] = useState(true);
    function FormSubmit(e: React.FormEvent) 
    {
         e.preventDefault()
        if (selectRating != undefined)
        {           
            setIsSubmit(false)
        }
    }

    return isSubmit ? 
    (
    <form onSubmit={FormSubmit} className={styles.painel}>
        <img className={styles.star} src="/icon-star.svg" alt=""></img>

        <h1 className={styles.title}>How did we do?</h1>

        <p className={styles.paragrafo}>
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
        </p>

        <div className={styles.group}>
            {[1, 2, 3, 4, 5].map((n) => (
                <button type="button" onClick={() => ratingClicked(n)} className={styles.rating}>{n}</button>
            ))}                
        </div>

        <button type="submit" className={styles.submit}>Submit</button>
    </form>            
    ) 
    :
    (
    <div className={styles.painelThanks}>
        <img src="/illustration-thank-you.svg" alt="" />

        <p className={styles.selectedText}>You selected {selectRating} out of 5</p>

        <h1 className={styles.title}>Thank You!</h1>

        <p className={styles.paragrafo}>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </div>        
    );
}