const actions = require("../actions");
const { getUserId } = require("../utils/index");
const { storeUpload } = require("../utils/index");

const signup = async(_, args, context, info) => {
    const {createReadStream} = await args.data.profile_image;
    const stream = createReadStream();
    const {url} = await storeUpload(stream);
    args.data.profile_image = url;

    return actions.signup(args.data)
        .then(token => { return {"message":"User created successfully", token: token}; }
    ).catch(e => e);
}

const login = (_, args, context, info) => {
    return actions.login(args).then(
        token => { return {"message":"User logged successfully", token: token}; }
    ).catch(e => e);
}

const deleteUser = (_, args, context, info) => {
    return actions.deleteUserById(args.id).then((user)=>{
        if(!user) throw new Error("User does not exist");
        return user
    }).catch(e => e)
}

const updateUser = (_, args, context, info) => {
    return actions.updateUserById(args.id, args.data).then((user)=>{
        if(!user) throw new Error("User does not exist");
        return user
    }).catch( e => e);
}

const createMovie = (_,args,context,info) => {
    return actions.createMovie(args.data).then((movie) => {
        return movie.toObject()
    }).catch((err) => {throw err;})
}

const deleteMovie = (_, args, context, info) => {
    return actions.deleteMovieById(args.id).then((movie)=>{
        if(!movie) throw new Error("Movie does not exist");
        return movie
    }).catch(e => e)
}

const updateMovie = (_, args, context, info) => {
    return actions.updateMoviebyId(args.id, args.data).then((movie) => {
        if(!movie) throw new Error("Movie does not exist");
        return movie
    }).catch( e => e);
}

const createSerie = (_,args,context,info) => {
    return actions.createSeries(args.data).then((Series) => {
        return Series.toObject()
    }).catch(e => e)
}

const deleteSerie = (_, args, context, info) => {
    return actions.deleteSerieById(args.id).then((Series)=>{
        if(!Series) throw new Error("Serie does not exist");
        return Series
    }).catch(e => e)
}

const updateSerie = (_, args, context, info) => {
    return actions.updateSeriebyId(args.id, args.data).then((Series) => {
        if(!Series) throw new Error("Serie does not exist");
        return Series
    }).catch( e => e);
}

module.exports = {
    signup,
    login,
    deleteUser,
    updateUser,
    createMovie,
    deleteMovie,
    updateMovie,
    createSerie,
    deleteSerie,
    updateSerie
}