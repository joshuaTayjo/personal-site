import toggle from '../styles/toggle.module.css'

const ToggleSwitch = ({ label }) => {
    return (
        <div className={toggle.container}>
            {label}{" "}
            <div className={toggle.switch}>
                <input type="checkbox" className={toggle.checkbox}
                       name={label} id={label} />
                <label className={toggle.label} htmlFor={label}>
                    <span className={toggle.inner} />
                    <span className={toggle.switch} />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;


