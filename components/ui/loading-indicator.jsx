const LoadingIndicator = ({ size = 'sm' }) => {
    const fontSize = {
      sm: '0.5rem',
      md: '2.5rem',
      lg: '4rem',
      page: '10rem'
    }
    return (
      <div className={`loading-indicator`} style={{ fontSize: fontSize[size] }}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
      </div>
    )
}

export default LoadingIndicator;