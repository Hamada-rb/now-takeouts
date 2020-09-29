import React from 'react';
import { Card } from 'react-bootstrap';

class Place extends React.Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>
                    <div className="card-body">
                        <div>
                            {this.props.info.info}
                        </div>
                        <div>
                            {this.props.info.address}
                        </div>
                        <div>
                            TEL:{this.props.info.tel}
                        </div>
                    </div>
                    <a href={`https://www.google.com/maps/dir/?api=1&origin=${this.props.info.location.latitude},${this.props.info.location.longitude}&destination=${this.props.lat},${this.props.lng}`} className="btn btn-outline-success" variant="primary" >お店までの道順を見る</a>
                </Card.Body>
            </Card>
        );
    }
}

export default Place;