import {useState, useEffect} from "react";

const Validation = Object.freeze({
    NONE: "none",
    SUCCESS: "success",
    FAILURE: "failure",
});

function Email() {
    const [validation, setValidation] = useState(Validation.NONE);
    const [pending, setPending] = useState(Validation.NONE);

    function onSubmit(event) {
        event.preventDefault();

        const emailForm = event.target;
        const email = emailForm.elements.email.value;
        const result = ((email.endsWith(".edu") || email.endsWith(".com")) && email.includes("@")) ? Validation.SUCCESS : Validation.FAILURE;

        setPending(result);
    }

    useEffect(() => {
        let timeout = null;
        if (pending !== Validation.NONE) {
            setValidation(Validation.NONE);

            timeout = setTimeout(() => {
                setValidation(pending);
                setPending(Validation.NONE);
            }, 100);
        }
        return () => clearTimeout(timeout);
    }, [pending]);

    const emailSuccess = (
        <div className="email-success">
            Email successfully recorded at /dev/null
        </div>
    );
    const emailFailure = (
        <div className="email-failure">
            Invalid email address
        </div>
    );

    return (
        <div>
            <div className="center">
                This site is a work in progress.
                Stay tuned for updates!
            </div>
            <br />
            <div id="email" className="center">
                <form onSubmit={onSubmit}>
                    <label>
                        {"Email address: "}
                        <input type="text" name="email" />
                    </label>
                    <label>
                        {" "}
                        <input type="submit" name="submit" value="Register" />
                    </label>
                </form>
                {(() => {
                    switch (validation) {
                        case Validation.SUCCESS: return emailSuccess;
                        case Validation.FAILURE: return emailFailure;
                        default: return null;
                    }
                })()}
            </div>
        </div>
    );
}

export default Email;
