class Api::ReviewsController < ApplicationController
  before_action :set_product
  before_action :set_review, only: [:update, :destroy, :show]

  def index
    render json: @product.reviews
  end

  def show
    render json: @review
  end

  def create
    review = @product.reviews.new(review_params)
      if review.save
        render json: review
      else
        render json: review.errors
      end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render jsonL @review.errors
    end
  end

  def destroy
    @review.destroy
  end

  private

  def set_item
    @item = Product.find(params[:item_id])
  end

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:title, :body, :author, :rating, :image)
  end
end
