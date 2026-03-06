// UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const UserDashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const { data: userData, error: userError } = await supabase
                .from('users')
                .select('*');

            if (userError) throw userError;

            const { data: postsData, error: postsError } = await supabase
                .from('posts')
                .select('*');

            if (postsError) throw postsError;

            setData({ users: userData, posts: postsData });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Dashboard</h1>
            <h2>Users</h2>
            <ul>{data.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
            <h2>Posts</h2>
            <ul>{data.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </div>
    );
};

export default UserDashboard;