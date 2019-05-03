import React from 'react'
import profilePicture from '../../../static/assets/images/bio/placeholderprofilepic.jpg' 

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div 
                className='left-column'
                style={{
                    background: 'url(' + profilePicture + ') no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' 
                }}
            />
            <div className='right-column'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Velit scelerisque in dictum non consectetur a erat. Urna et pharetra pharetra massa massa. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Suspendisse ultrices gravida dictum fusce ut placerat orci. Imperdiet proin fermentum leo vel orci porta non pulvinar. Dui nunc mattis enim ut tellus elementum sagittis. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. In vitae turpis massa sed elementum tempus. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Sagittis purus sit amet volutpat consequat mauris nunc congue. Commodo viverra maecenas accumsan lacus vel facilisis. In iaculis nunc sed augue lacus viverra. Nulla malesuada pellentesque elit eget gravida.
            </div>
        </div>
    )
}