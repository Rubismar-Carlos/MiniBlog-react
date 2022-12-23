import styles from './Search.module.css'

// react router
import { Link } from 'react-router-dom'

// components
import PostDetail from '../../components/PostDetail'

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocument'
import { useQuery } from '../../hooks/useQuery'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                <p>Não foram encontrados posts a partir da sua busca...</p>
                <Link to="/home" className="btn btn-dark">Voltar</Link>
                </div>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Search