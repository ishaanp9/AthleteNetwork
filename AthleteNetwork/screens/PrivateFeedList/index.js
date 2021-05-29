import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import PostItem from '../../components/PostItem';

import posts from './posts';

const FeedHandler = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({item}) => <PostItem post={item} descriptionExpanded={(item.description.length > 35) ? true : false} navigation={navigation} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default FeedHandler;