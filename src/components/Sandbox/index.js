import React, { Component, useState, useEffect } from "react";

class Card extends Component {
  get data() {
    let { first, last } = this.props;
    return { first, last };
  }

  render() {
    let { first, last } = this.data;
    return (
      <div className="Blog__Excerpt col-12 col-sm-6 col-md-4">
        <div className="Blog__Excerpt">
          <span
            className="Blog__Excerpt-Title"
            dangerouslySetInnerHTML={{ __html: first }}
          />
          <span
            className="Blog__Excerpt-Subtitle"
            dangerouslySetInnerHTML={{ __html: last }}
          />
        </div>
      </div>
    );
  }
}

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  async function fetchBlog() {
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
    setLoading(false);
    // Aqui tem que chamar a funcao que renderizar o conteúdo
    console.log("fetchblog loading", loading);
  }
  useEffect(() => {
    fetchBlog();
  }, []);

  return { data, loading };
};

export default () => {
  let url = `https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole`;
  const { data, loading } = useFetch(url);

  console.log("default effect loading", loading);
  console.log("default effect data", !!data);
  return (
    <div>
      {loading ? (
        <p className="text-center mt-5 mb-5">Carregando...</p>
      ) : (
        <div>
          {data.length ? (
            <div id="ExcerptContainer" className="container pt-2">
              <div className="row">
                {data.map((post, key) => (
                  <Card key={key} {...post} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center mt-5 mb-5">Carregando...</p>
          )}
        </div>
      )}
    </div>
  );
};
