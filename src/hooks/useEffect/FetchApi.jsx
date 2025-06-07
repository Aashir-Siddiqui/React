import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Alert } from 'antd';

const { Meta } = Card;

export default function FetchApi() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
            if (!res.ok) throw new Error("Network response was not ok");
            const data = await res.json();

            const allData = await Promise.all(
                data.results.map(async (poke) => {
                    const res = await fetch(poke.url);
                    return await res.json();
                })
            );

            setPokemonList(allData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (loading) return <Spin tip="Loading Pokemon..." fullscreen />;
    if (error) return <Alert message="Error" description={error} type="error" showIcon />;

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Pokemon Cards</h1>
            <Row gutter={[16, 16]}>
                {pokemonList.map((pokemon) => (
                    <Col key={pokemon.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            style={{ width: '100%', borderRadius: '10px' }}
                            cover={
                                <img
                                    alt={pokemon.name}
                                    src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default}
                                    style={{ height: 200, objectFit: 'contain', padding: '20px' }}
                                />
                            }
                        >
                            <Meta
                                title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                description={`ID: ${pokemon.id}`}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
