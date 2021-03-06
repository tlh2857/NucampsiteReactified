import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
class CampsiteInfo extends React.Component {
    constructor(props){
        super(props);
    }
    renderCampsite(campsite){
        return (<div className='col-md-5 m-1'>
           <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>)
    }
    renderComments(comments){
        if(comments){
            return(<div className='col-md-5 m-1'>
                <h4 className=''>Comments</h4>
                {comments.map((comment)=><div key={comment.id}>{comment.text}
                {comment.author}{comment.date}
               </div> )}
            </div>);
        } return <div></div> 
    } 
    render(){
        if(this.props.campsite){
           // console.log('logged')
            return (<div className='container'>
            return (    <div className='row'>{this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
                </div>
            return (</div>)
        } else return <div></div>
       
    }
}
export default CampsiteInfo;

