import React, { useCallback } from 'react';
import {useState} from "react";
import {View, Text, ImageBackground, SafeAreaView, Pressable} from 'react-native';
//import { withNavigation } from 'react-navigation';
import styles from './stylesTT';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwsome from 'react-native-vector-icons/FontAwesome';

import SeeMore from 'react-native-see-more-inline';


const PostItem = (props) => {
  const [post, setPost] = useState(props.post);
  const descriptionExpanded = props.descriptionExpanded;
  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [textShown, setTextShown] = useState(true);
  const [lengthMore, setLengthMore] = useState(false);


  const onLikePressed = () => { 
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const onCommentPressed = () => {
    const commentsToAdd = isCommented ? -1 : 1;
    setPost({
      ...post,
      comments: post.comments + commentsToAdd,
    });
    setIsCommented(!isCommented);
  };

  const onMorePressed = () => {    
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length > 1)
  }, []);

  let ExpandButton = () => {
    return(
      <Text
      onPress={onMorePressed}
      style={styles.textExpand}
      >{textShown ? 'Read more' : 'Read less'}</Text>
    );
  }

  return (
    <View style={styles.postContainer}>
      <ImageBackground source={post.image} style={styles.image} />

      <View style={styles.rightContainer}>

        <View style={styles.messageContainer}>
          <Pressable >
            <Icon name={'chat'} size={25} color='black'/>
          </Pressable>
        </View>

        <View style={styles.iconHolder}>
          <View style={styles.iconContainer}>
            <Pressable onPress={() => console.log('This has been pressed')}>
              <Icon name={'favorite-border'} size={25} color={isLiked ? 'red' : 'black'}/>
            </Pressable>
            <Text style={styles.statNum}>{post.likes}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Pressable onPress={onCommentPressed}>
              <Icon name={'comment'} size={25} color={isCommented ? 'red' : 'black'}/>
            </Pressable>
            <Text style={styles.statNum}>{post.comments}</Text>
          </View>

          <View style={styles.iconContainer}>
            <FontAwsome name={'retweet'} size={25} color="black"/>
            <Text style={styles.statNum}>{post.reposts}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Icon name={'share'} size={25} color="black"/>
            <Text style={styles.statNum}>Share</Text>
          </View>
      </View>   
    </View>

    <View style={styles.textContainer}>
        <Text style={styles.usernameText}>{post.username}</Text>
        
        <View style={styles.descContainer}>
          <SeeMore 
            numberOfLines={1} style={styles.descriptionText}
            linkColor = '#808080'
            //seeMoreText='see more'
            //seeLessText='see less'
            >
            {post.description}
          </SeeMore>
        </View>
        

        {/*<Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? 1 : 8}
          style={styles.descriptionText}>{post.description}</Text>
          {
            descriptionExpanded ? 
            <ExpandButton/>
            :
            null
          }*/}

        <Text style={styles.postTimeText}>5 Hours Ago</Text>
      </View> 
    </View>
  );
};

export default PostItem;
