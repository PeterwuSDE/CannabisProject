import "../css/subtypes.css";

export const OralsSubtypes = () => {
    return (
        <div className="orals-subtypes">
            <form className="subtype-selection">
                <label class="subtype-container">Tincture
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Distillate/Oils
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Caplet/Capsule
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Edible
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
            </form>
        </div>
    )
}


