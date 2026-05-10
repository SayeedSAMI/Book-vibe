import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "60px 40px",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          maxWidth: "550px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            margin: "0",
            fontWeight: "900",
            color: "#111827",
            lineHeight: "1",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "34px",
            marginTop: "20px",
            marginBottom: "10px",
            color: "#1f2937",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            fontSize: "17px",
            color: "#6b7280",
            lineHeight: "1.7",
            marginBottom: "35px",
          }}
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "12px",
              backgroundColor: "#111827",
              color: "white",
              fontWeight: "600",
            }}
          >
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            style={{
              padding: "14px 28px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              backgroundColor: "white",
              color: "#111827",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;