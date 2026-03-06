import { supabase } from "./supabase";

// Check if user has a valid session
export const getSession = async () => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    
    if (error) throw error;
    return session;
  } catch (error) {
    console.error("[Auth] Get session error:", error);
    return null;
  }
};

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) throw error;
    return { user: data.user, error: null };
  } catch (error) {
    console.error("[Auth] Sign in error:", error);
    return { user: null, error: error.message };
  }
};

// Sign up
export const signUp = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    if (error) throw error;
    return { user: data.user, error: null };
  } catch (error) {
    console.error("[Auth] Sign up error:", error);
    return { user: null, error: error.message };
  }
};

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("[Auth] Sign out error:", error);
    return { error: error.message };
  }
};

// Check if user is admin
export const isAdmin = async (email) => {
  try {
    const { data, error } = await supabase
      .from("admins")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (error) throw error;
    return !!data;
  } catch (error) {
    console.error("[Auth] Admin check error:", error);
    return false;
  }
};

// Listen to auth state changes
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
};
