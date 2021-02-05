const Tab = ({title, onClick, className}) => (
    <div className="tab_wrap" onClick={(e) => onClick(e)}>
        <p className={className}>{title}</p>
    </div>
)

export default Tab;