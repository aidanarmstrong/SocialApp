import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CustomSafeAreaView from '../components/assets/customSafeAreaView.component';
import {feedStyles} from '../assets/styles/primary.styles';
import PostComponent from '../components/post/post.component';

const HomeScreen = () => {

    const DATA  = [
        {
            id: 1234,
            name: "Aidan Armstrong",
            verifiedUser: true,
            timestamp: "6 hours ago",
            feedText:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non tortor at nisi hendrerit placerat. Maecenas gravida sed est in cursus. Proin scelerisque odio vitae orci rutrum, vel ultrices diam faucibus. Nunc ac nulla tristique, malesuada magna ut, hendrerit quam. Pellentesque sodales fermentum nibh, sit amet pellentesque erat efficitur sit amet. Vivamus vitae commodo sem. Quisque iaculis sodales urna sed convallis. Praesent mattis tellus ut metus pellentesque elementum. Donec magna dolor, euismod vehicula ipsum vitae, pellentesque rhoncus tortor. Aenean pretium at turpis ut suscipit.\n" +
                "\n" +
                "In ac odio nec neque fermentum fringilla. Donec tortor purus, lobortis ut aliquet a, porttitor in nulla. Nunc sodales augue sollicitudin nisl semper lacinia. Nulla et rhoncus libero. Vivamus euismod in tortor ut aliquet. Maecenas maximus vulputate gravida. Etiam non lorem in risus mollis hendrerit. Cras massa est, eleifend et ipsum ut, tristique laoreet magna. Nam sollicitudin ipsum et laoreet placerat. Praesent eget nisi aliquam justo fermentum volutpat. Aenean velit tellus, faucibus et convallis sit amet, maximus id ligula. Donec scelerisque porta nunc vel elementum. Donec scelerisque malesuada facilisis."
            ,
            feedPhoto: false,
            feedVideo: false,
            liked: true,
        },
        {
            id: 1,
            name: "Kate Armstrong",
            verifiedUser: false,
            timestamp: "1 hour ago",
            feedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut sodales velit, sit amet ultricies neque. Sed pharetra congue feugiat. Nullam dictum sit amet risus quis facilisis",
            feedPhoto: false,
            feedVideo: false,
            liked: false,
        },
        {
            id: 3,
            name: "Neil Armstrong",
            verifiedUser: false,
            timestamp: "5 mins ago",
            feedText: "Etiam in sollicitudin urna. Vivamus eu molestie quam. Ut ac accumsan nulla, sit amet venenatis ligula. Nulla eu sodales orci. Donec tincidunt turpis malesuada laoreet ullamcorper. Integer vel maximus lacus. Nam lorem velit, dignissim ut nibh vel, mattis scelerisque est. Suspendisse iaculis ac velit at rhoncus.",
            feedPhoto: false,
            feedVideo: false,
            liked: false,
        },
        {
            id: 4,
            name: "Niall Armstrong",
            verifiedUser: false,
            timestamp: "24 mins ago",
            feedText: "ligula. Nulla eu sodales orci. Donec tincidunt turpis malesuada laoreet ullamcorper. Integer vel maximus lacus. Nam lorem velit, dignissim ut nibh vel, mattis scelerisque est. Suspendisse iaculis ac velit at rhoncus.",
            feedPhoto: false,
            feedVideo: false,
            liked: false,
        }
    ]

    return(
        <CustomSafeAreaView>
            <FlatList
                data={DATA}
                renderItem={ (data, key) => (
                    <PostComponent data={data} key={key}/>
                )}
            />
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default HomeScreen;
