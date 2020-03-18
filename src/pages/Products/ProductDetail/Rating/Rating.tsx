import React,{useState} from 'react'
import ReactStarts from 'react-stars'
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonButton,
  IonInput
} from '@ionic/react';

const Rating = () => {
  const [isRating, setIsRating] = useState(false)

  const data = [
    {
      username: "Pham Duc Minh",
      date: "20/02/2020",
      description: "Laboris proident est ipsum aliqua adipisicing adipisicing dolore. Consequat ulla" +
        "mco Lorem reprehenderit in laboris culpa enim velit pariatur. Ad et dolor Lorem " +
        "nostrud anim ipsum veniam excepteur non."
    }
  ]

  const ratingHandler = () => {
    if(!isRating){
      setIsRating(true)
    }
  }

  const renderRating = data.map(cm => {
    return (
      <IonCard className="Product-Detail-Comment">
        <IonCardHeader className="Product-Detail-Comment-Header">
          <div>
            <IonLabel>{cm.username}</IonLabel>
            <ReactStarts
              value={4.5}
              count={5}
              size={14}
              color1={'#EDEDED'}
              color2={'#3880ff'}/>
          </div>
          <IonLabel>{cm.date}</IonLabel>

        </IonCardHeader>
        <IonCardContent>
          {cm.description}
        </IonCardContent>
      </IonCard>
    )
  })

  const reviewForm = () => {
    return(
      <IonCard className="Product-Detail-Comment">
        <IonCardHeader className="Product-Detail-Comment-Header">
            <ReactStarts
              value={4.5}
              count={5}
              size={14}
              color1={'#EDEDED'}
              color2={'#3880ff'}/>
        </IonCardHeader>
        <IonCardContent>
          <IonInput type='text'/>
        </IonCardContent>
      </IonCard>
    )
  }
  
  return (
    <div className="Product-Detail-Rating">
      <h3>Đánh giá</h3>
      {renderRating}
      <IonButton expand='block' onClick={ratingHandler}>Đánh giá sản phẩm này</IonButton>

    </div>
  )
}

export default Rating
