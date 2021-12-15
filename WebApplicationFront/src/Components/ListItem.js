import '../css/ListItem.css';

export default function ListItem (props) {
    return(
        <div className="ListItem">
            <p className="name">{props.name}</p>
            <p className="type">{props.type}</p>
        </div>
    );
}