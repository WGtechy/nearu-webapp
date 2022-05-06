const PageLoading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse">loading page</div>
    </div>
  );

const ContentLoading = (
    <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">loading content</div>
  </div>   
)

const DataLoading = (data) => {
   return (<div className ="data__loading">
    loadind {data}...
    </div>)
}

export {PageLoading, ContentLoading, DataLoading};