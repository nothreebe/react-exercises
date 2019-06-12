import React from 'react';

const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';
const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?
    query=cars&page=1&per_page=10`;

const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
    headers: {
        Authorization: basicAuth()
    }
};

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }

        this.getFlickImages();
    }


    getFlickImages() {
        return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
            .then(pieterjan => {
                return pieterjan.json();
            })
            .then(jeroen => {
                console.log(jeroen)
                const photos = jeroen.data.map( image => ({
                    id: image.id,
                    mediaUrl: image.assets.preview.url,
                    description: image.description
                }));

                this.setState({ photos: photos });
                console.log(this.state.photos)

            });

    }

    render() {
        console.log();
        return (
            <div>
                <div style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', marginTop: '2em', width: '100%', flexWrap: 'wrap' }}>
                    {this.state.photos ? this.state.photos.map((item) => {
                        return <a key={item.id} href="#" style={{ margin: '1em' }} className="card-item card-item-image">
                            <img src={item.mediaUrl} alt={item.description} />
                            <h2>Test</h2>
                            <p>{item.description}</p><span>More about this client</span>
                        </a>
                    }) : ''}
                </div>
            </div>
        );
    }
}
export default Images;