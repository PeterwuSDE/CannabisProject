import "../css/subtypes.css";

export const SmokingSubtypes = () => {
    return (
        <div className="smoking-subtypes">
            <form className="subtype-selection">
                <label class="subtype-container">Indica
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Sativa
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
                <label class="subtype-container">Hybrid
                    <input type="radio" name="subtype"/>
                    <span class="subtype-checkmark"></span>
                </label>
            </form>
        </div>
    )
}

