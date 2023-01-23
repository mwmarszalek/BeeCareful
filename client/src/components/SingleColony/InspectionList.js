import InspectionCard from "./InspectionCard"
import NewInspectionForm from "./NewInspectionForm";
import './InspectionList.css'


const InspectionList = ({apiaryData, selectedColony, weather, addInspection, updateInspection, deleteInspection, editInspection}) => {

    const colony = apiaryData.colonies.filter(colony => {
        return colony._id === selectedColony;
    })[0];

    const inspectionNodes = colony.inspections.map((inspection, index) => {
        return <InspectionCard key={index} inspection={inspection} deleteInspection={deleteInspection} editInspection={editInspection}/>
    })

    return (
        <>

            <ul>
                {inspectionNodes}
            </ul>
            <h3>Add New Inspection</h3>
            <NewInspectionForm 
                addInspection={addInspection} 
                apiary_id={apiaryData._id}
                colony_id={selectedColony}
            />
        </>
    )
}

export default InspectionList;
