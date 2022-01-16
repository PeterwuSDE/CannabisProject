import "../css/subtypes.css";

export const VapingSubtypes = () => {
    return (
        <div className="vaping-subtypes">
            <form className="subtype-selection">
                <label class="subtype-container">Full Spectrum Oil
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Distillate Oil
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Live Resin
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
            </form>
        </div>
    )
}

