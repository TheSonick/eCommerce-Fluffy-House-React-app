export default function BeastInfo({beast}){         
    return(
        <>
            <div className="beast__name">
                {beast.name}
            </div>
            <div className="beast__type">
                {beast.type}
            </div>
            <div className="beast__color">
                {'Окрас: ' + beast.color}
            </div>
            <div className="beast__date">
                {beast.birth}
            </div>
        </>
    )
}